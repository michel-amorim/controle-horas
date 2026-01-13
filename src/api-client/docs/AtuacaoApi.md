# AtuacaoApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**atuacaoControllerAtualizar**](#atuacaocontrolleratualizar) | **PATCH** /atuacao/{id} | Atualiza uma atuação.|
|[**atuacaoControllerDeletar**](#atuacaocontrollerdeletar) | **DELETE** /atuacao/{id} | Deleta uma atuação.|
|[**atuacaoControllerFinalizar**](#atuacaocontrollerfinalizar) | **PATCH** /atuacao/{id}/fechar | Finaliza uma atividade.|
|[**atuacaoControllerIniciar**](#atuacaocontrolleriniciar) | **POST** /atuacao | Inicia uma atividade.|
|[**atuacaoControllerRelatorio**](#atuacaocontrollerrelatorio) | **GET** /atuacao/relatorio | Obtem o relatorio de um ano e mes.|

# **atuacaoControllerAtualizar**
> Atuacao atuacaoControllerAtualizar(atualizarAtuacaoDto)


### Example

```typescript
import {
    AtuacaoApi,
    Configuration,
    AtualizarAtuacaoDto
} from './api';

const configuration = new Configuration();
const apiInstance = new AtuacaoApi(configuration);

let id: string; // (default to undefined)
let atualizarAtuacaoDto: AtualizarAtuacaoDto; //

const { status, data } = await apiInstance.atuacaoControllerAtualizar(
    id,
    atualizarAtuacaoDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **atualizarAtuacaoDto** | **AtualizarAtuacaoDto**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**Atuacao**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **atuacaoControllerDeletar**
> Atuacao atuacaoControllerDeletar()


### Example

```typescript
import {
    AtuacaoApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AtuacaoApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.atuacaoControllerDeletar(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**Atuacao**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **atuacaoControllerFinalizar**
> Atuacao atuacaoControllerFinalizar(atuacaoDto)


### Example

```typescript
import {
    AtuacaoApi,
    Configuration,
    AtuacaoDto
} from './api';

const configuration = new Configuration();
const apiInstance = new AtuacaoApi(configuration);

let id: string; // (default to undefined)
let atuacaoDto: AtuacaoDto; //

const { status, data } = await apiInstance.atuacaoControllerFinalizar(
    id,
    atuacaoDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **atuacaoDto** | **AtuacaoDto**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**Atuacao**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **atuacaoControllerIniciar**
> Atuacao atuacaoControllerIniciar(atuacaoDto)


### Example

```typescript
import {
    AtuacaoApi,
    Configuration,
    AtuacaoDto
} from './api';

const configuration = new Configuration();
const apiInstance = new AtuacaoApi(configuration);

let atuacaoDto: AtuacaoDto; //

const { status, data } = await apiInstance.atuacaoControllerIniciar(
    atuacaoDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **atuacaoDto** | **AtuacaoDto**|  | |


### Return type

**Atuacao**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **atuacaoControllerRelatorio**
> Array<RelatorioItemDto> atuacaoControllerRelatorio()


### Example

```typescript
import {
    AtuacaoApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AtuacaoApi(configuration);

let mes: number; // (default to undefined)
let ano: number; // (default to undefined)

const { status, data } = await apiInstance.atuacaoControllerRelatorio(
    mes,
    ano
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **mes** | [**number**] |  | defaults to undefined|
| **ano** | [**number**] |  | defaults to undefined|


### Return type

**Array<RelatorioItemDto>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

