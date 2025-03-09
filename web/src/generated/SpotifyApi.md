# .SpotifyApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAccessToken**](SpotifyApi.md#getAccessToken) | **GET** /v1/spotify/access-token | Gets current access token
[**getSpotifyAuthUrl**](SpotifyApi.md#getSpotifyAuthUrl) | **GET** /v1/spotify/auth/url | Get Spotify Authorization URL
[**searchForArtists**](SpotifyApi.md#searchForArtists) | **GET** /v1/spotify/search/artists | Get artists based on name


# **getAccessToken**
> TokenResponse getAccessToken()

Gets current access token for user

### Example


```typescript
import { createConfiguration, SpotifyApi } from '';

const configuration = createConfiguration();
const apiInstance = new SpotifyApi(configuration);

const request = {};

const data = await apiInstance.getAccessToken(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**TokenResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully got access token |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getSpotifyAuthUrl**
> AuthUrlResponse getSpotifyAuthUrl()

Returns a URL that users can visit to authorize the application with their Spotify account

### Example


```typescript
import { createConfiguration, SpotifyApi } from '';

const configuration = createConfiguration();
const apiInstance = new SpotifyApi(configuration);

const request = {};

const data = await apiInstance.getSpotifyAuthUrl(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**AuthUrlResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved authorization URL |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **searchForArtists**
> Array<Artist> searchForArtists()

Gets spotify related artists from name

### Example


```typescript
import { createConfiguration, SpotifyApi } from '';
import type { SpotifyApiSearchForArtistsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new SpotifyApi(configuration);

const request: SpotifyApiSearchForArtistsRequest = {
    // name of the spotify artist (optional)
  name: "name_example",
};

const data = await apiInstance.searchForArtists(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | name of the spotify artist | (optional) defaults to undefined


### Return type

**Array<Artist>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully got artists |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


