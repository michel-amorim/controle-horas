# Projeto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [default to undefined]
**nome** | **string** |  | [default to undefined]
**cor** | **string** |  | [default to undefined]
**origem** | **string** |  | [default to undefined]
**atividades** | [**Array&lt;Atividade&gt;**](Atividade.md) |  | [default to undefined]
**horasMaxima** | **number** |  | [optional] [default to undefined]
**concluido** | **boolean** |  | [default to false]
**stampCreate** | **string** |  | [default to undefined]
**stampUpdate** | **string** |  | [default to undefined]

## Example

```typescript
import { Projeto } from './api';

const instance: Projeto = {
    id,
    nome,
    cor,
    origem,
    atividades,
    horasMaxima,
    concluido,
    stampCreate,
    stampUpdate,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
