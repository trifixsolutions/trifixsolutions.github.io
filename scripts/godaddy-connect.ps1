param(
    [Parameter(Mandatory = $true)]
    [string]$Domain,

    [ValidateSet("prod", "ote")]
    [string]$Environment = "prod",

    [switch]$ShowRecords
)

$apiKey = $env:GODADDY_API_KEY
$apiSecret = $env:GODADDY_API_SECRET

if ([string]::IsNullOrWhiteSpace($apiKey) -or [string]::IsNullOrWhiteSpace($apiSecret)) {
    throw "Missing GODADDY_API_KEY or GODADDY_API_SECRET environment variable."
}

$baseUrl = if ($Environment -eq "ote") { "https://api.ote-godaddy.com" } else { "https://api.godaddy.com" }
$headers = @{
    Authorization = "sso-key $apiKey`:$apiSecret"
    Accept        = "application/json"
}

try {
    $domainInfo = Invoke-RestMethod -Method Get -Uri "$baseUrl/v1/domains/$Domain" -Headers $headers
    Write-Host "Connected to GoDaddy API ($Environment) successfully."
    Write-Host "Domain: $($domainInfo.domain)"
    Write-Host "Status: $($domainInfo.status)"
    Write-Host "Created At: $($domainInfo.createdAt)"
    Write-Host "Expires: $($domainInfo.expires)"

    if ($ShowRecords) {
        $records = Invoke-RestMethod -Method Get -Uri "$baseUrl/v1/domains/$Domain/records" -Headers $headers
        Write-Host "`nDNS Records ($($records.Count))"
        $records | Select-Object type, name, data, ttl | Format-Table -AutoSize
    }
}
catch {
    Write-Error "GoDaddy API request failed: $($_.Exception.Message)"
    if ($_.ErrorDetails -and $_.ErrorDetails.Message) {
        Write-Error "Details: $($_.ErrorDetails.Message)"
    }
    exit 1
}
