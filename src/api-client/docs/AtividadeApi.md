# AtividadeApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**atividadeControllerAdicionarAtividade**](#atividadecontrolleradicionaratividade) | **POST** /atividade | Cadastra uma atividade.|
|[**atividadeControllerAlterarStatus**](#atividadecontrolleralterarstatus) | **PATCH** /atividade/{id}/status | Ativa ou desativa uma atividade.|
|[**atividadeControllerAtualizarAtividade**](#atividadecontrolleratualizaratividade) | **PATCH** /atividade/{id} | Atualiza uma atividade.|
|[**atividadeControllerDeletarAtividade**](#atividadecontrollerdeletaratividade) | **DELETE** /atividade/{id} | Deleta uma atividade.|
|[**atividadeControllerEncontrarAtividade**](#atividadecontrollerencontraratividade) | **GET** /atividade/{id} | Obtem detalhes de uma atividade.|
|[**atividadeControllerListarAtividadesGeral**](#atividadecontrollerlistaratividadesgeral) | **GET** /atividade | Lista todas as atividades de um ano e mes.|

# **atividadeControllerAdicionarAtividade**
> Atividade atividadeControllerAdicionarAtividade(adicionarAtividadeDto)


### Example

```typescript
import {
    AtividadeApi,
    Configuration,
    AdicionarAtividadeDto
} from './api';

const configuration = new Configuration();
const apiInstance = new AtividadeApi(configuration);

let adicionarAtividadeDto: AdicionarAtividadeDto; //

const { status, data } = await apiInstance.atividadeControllerAdicionarAtividade(
    adicionarAtividadeDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **adicionarAtividadeDto** | **AdicionarAtividadeDto**|  | |


### Return type

**Atividade**

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

# **atividadeControllerAlterarStatus**
> Atividade atividadeControllerAlterarStatus(atividadeControllerAlterarStatusRequest)


### Example

```typescript
import {
    AtividadeApi,
    Configuration,
    AtividadeControllerAlterarStatusRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AtividadeApi(configuration);

let id: string; // (default to undefined)
let atividadeControllerAlterarStatusRequest: AtividadeControllerAlterarStatusRequest; //

const { status, data } = await apiInstance.atividadeControllerAlterarStatus(
    id,
    atividadeControllerAlterarStatusRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **atividadeControllerAlterarStatusRequest** | **AtividadeControllerAlterarStatusRequest**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**Atividade**

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

# **atividadeControllerAtualizarAtividade**
> Atividade atividadeControllerAtualizarAtividade(atualizarAtividadeDto)


### Example

```typescript
import {
    AtividadeApi,
    Configuration,
    AtualizarAtividadeDto
} from './api';

const configuration = new Configuration();
const apiInstance = new AtividadeApi(configuration);

let id: string; // (default to undefined)
let atualizarAtividadeDto: AtualizarAtividadeDto; //

const { status, data } = await apiInstance.atividadeControllerAtualizarAtividade(
    id,
    atualizarAtividadeDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **atualizarAtividadeDto** | **AtualizarAtividadeDto**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**Atividade**

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

# **atividadeControllerDeletarAtividade**
> Atividade atividadeControllerDeletarAtividade()


### Example

```typescript
import {
    AtividadeApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AtividadeApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.atividadeControllerDeletarAtividade(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**Atividade**

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

# **atividadeControllerEncontrarAtividade**
> Atividade atividadeControllerEncontrarAtividade()


### Example

```typescript
import {
    AtividadeApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AtividadeApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.atividadeControllerEncontrarAtividade(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**Atividade**

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

# **atividadeControllerListarAtividadesGeral**
> Array<Atividade> atividadeControllerListarAtividadesGeral()


### Example

```typescript
import {
    AtividadeApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AtividadeApi(configuration);

let mes: number; // (default to undefined)
let ano: number; // (default to undefined)

const { status, data } = await apiInstance.atividadeControllerListarAtividadesGeral(
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

**Array<Atividade>**

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

