# event-grid-debug
Provides Event Grid Receiver - for examining Event Grid Event Payloads - Ngrok friendly



# AZ commands

from [Event Grid Authentication](https://docs.microsoft.com/en-us/azure/event-grid/security-authentication)

```
az extension add --name eventgrid
```

```
az eventgrid event-subscription create --name tyrelladmin --endpoint https://103f7210.ngrok.io/
```


```
docker run -it --rm -v ${HOME}:/root microsoft/azure-cli
```