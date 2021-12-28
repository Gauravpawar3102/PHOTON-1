
# PHOTON

The project PHOTON is designed and developed in a why which i integrates more api's and though me a lot of things like how to handle api and how to integrate direct tweet section 

Photon presents you with photos and quotes which will make your day

## API Reference _ Api used is unsplash and twitter integration

#### Get all items

```http
  GET /api/items
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |



