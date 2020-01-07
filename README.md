## encipher

### AES 加密解密

```
import { encrypted, decrypted } from 'encipher';

const msg = 'text'
const encrpy = encrypted('msg)

const decrpy = decrypted(encrpy.toString()) // msg === decrpy
```