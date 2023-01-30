# Product Card

Este es un paqute de pruebas de despliegue en NPM.

### Arturo Mauricio

## Ejemplo

```
import {ProductCard,ProductImage, ProductTitle, ProductButtons} from ''
```

```
<ProductCard
    product={product}
    initialValues={{
        count: 6,
        maxCount: 15,
    }}
    >
    {({ reset, increaseBy, isMaxCountReached, count, maxCount }) => (
        <>
        <ProductImage />
        <ProductTitle />
        <ProductButtons />
        </>
    )}
</ProductCard>
```
