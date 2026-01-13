# ProjetoApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**projetoControllerAbrir**](#projetocontrollerabrir) | **PATCH** /projeto/{id}/abrir | Altera um projeto para aberto.|
|[**projetoControllerAdicionar**](#projetocontrolleradicionar) | **POST** /projeto | Cadastra um projeto.|
|[**projetoControllerAtualizar**](#projetocontrolleratualizar) | **PATCH** /projeto/{id} | Atualiza um projeto.|
|[**projetoControllerCalcularHoras**](#projetocontrollercalcularhoras) | **GET** /projeto/{id}/horas-trabalhadas | Calcula total de horas trabalhadas no projeto.|
|[**projetoControllerDeletar**](#projetocontrollerdeletar) | **DELETE** /projeto/{id} | Deleta um projeto.|
|[**projetoControllerEncontrar**](#projetocontrollerencontrar) | **GET** /projeto/{id} | Obtem detalhes de um projeto.|
|[**projetoControllerFechar**](#projetocontrollerfechar) | **PATCH** /projeto/{id}/fechar | Altera um projeto para fechado.|
|[**projetoControllerListar**](#projetocontrollerlistar) | **GET** /projeto | Lista todos os projetos.|
|[**projetoControllerListarAtividades**](#projetocontrollerlistaratividades) | **GET** /projeto/{id}/atividades | Lista atividades de um projeto.|

# **projetoControllerAbrir**
> Projeto projetoControllerAbrir()


### Example

```typescript
import {
    ProjetoApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProjetoApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.projetoControllerAbrir(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**Projeto**

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

# **projetoControllerAdicionar**
> Projeto projetoControllerAdicionar(adicionarProjetoDto)


### Example

```typescript
import {
    ProjetoApi,
    Configuration,
    AdicionarProjetoDto
} from './api';

const configuration = new Configuration();
const apiInstance = new ProjetoApi(configuration);

let adicionarProjetoDto: AdicionarProjetoDto; //

const { status, data } = await apiInstance.projetoControllerAdicionar(
    adicionarProjetoDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **adicionarProjetoDto** | **AdicionarProjetoDto**|  | |


### Return type

**Projeto**

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

# **projetoControllerAtualizar**
> Projeto projetoControllerAtualizar(atualizarProjetoDto)


### Example

```typescript
import {
    ProjetoApi,
    Configuration,
    AtualizarProjetoDto
} from './api';

const configuration = new Configuration();
const apiInstance = new ProjetoApi(configuration);

let id: string; // (default to undefined)
let atualizarProjetoDto: AtualizarProjetoDto; //

const { status, data } = await apiInstance.projetoControllerAtualizar(
    id,
    atualizarProjetoDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **atualizarProjetoDto** | **AtualizarProjetoDto**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**Projeto**

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

# **projetoControllerCalcularHoras**
> projetoControllerCalcularHoras()


### Example

```typescript
import {
    ProjetoApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProjetoApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.projetoControllerCalcularHoras(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **projetoControllerDeletar**
> Projeto projetoControllerDeletar()


### Example

```typescript
import {
    ProjetoApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProjetoApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.projetoControllerDeletar(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**Projeto**

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

# **projetoControllerEncontrar**
> Projeto projetoControllerEncontrar()


### Example

```typescript
import {
    ProjetoApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProjetoApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.projetoControllerEncontrar(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**Projeto**

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

# **projetoControllerFechar**
> Projeto projetoControllerFechar()


### Example

```typescript
import {
    ProjetoApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProjetoApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.projetoControllerFechar(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**Projeto**

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

# **projetoControllerListar**
> Array<Projeto> projetoControllerListar()


### Example

```typescript
import {
    ProjetoApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProjetoApi(configuration);

const { status, data } = await apiInstance.projetoControllerListar();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<Projeto>**

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

# **projetoControllerListarAtividades**
> Array<Atividade> projetoControllerListarAtividades()


### Example

```typescript
import {
    ProjetoApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProjetoApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.projetoControllerListarAtividades(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


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

