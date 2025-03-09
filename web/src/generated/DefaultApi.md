# .DefaultApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1SpotifyArtistArtistIdRandomSongsGet**](DefaultApi.md#v1SpotifyArtistArtistIdRandomSongsGet) | **GET** /v1/spotify/artist/{artistId}/random-songs | Get random songs for an artist by ID


# **v1SpotifyArtistArtistIdRandomSongsGet**
> ArtistSongResponse v1SpotifyArtistArtistIdRandomSongsGet()


### Example


```typescript
import { createConfiguration, DefaultApi } from '';
import type { DefaultApiV1SpotifyArtistArtistIdRandomSongsGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request: DefaultApiV1SpotifyArtistArtistIdRandomSongsGetRequest = {
    // ArtistID
  artistId: "artistId_example",
};

const data = await apiInstance.v1SpotifyArtistArtistIdRandomSongsGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **artistId** | [**string**] | ArtistID | defaults to undefined


### Return type

**ArtistSongResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Artist songs |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


