# silentvoice-links

Permanent redirect links behind the QR codes on The Silent Voice poster, hosted on Vercel.

| QR code | Link | Goes to |
|---|---|---|
| GitHub Repository | https://silentvoice-links.vercel.app/repo/ | set in `links.js` |
| Demo Video | https://silentvoice-links.vercel.app/video/ | set in `links.js` |
| Live Project | https://silentvoice-links.vercel.app/live/ | set in `links.js` |

**To change a destination:** edit `links.js`, then run `vercel deploy --prod` from this folder
(or connect this repo in the Vercel dashboard so every commit deploys automatically).
The printed QR codes never change.

**To track scans:** make a free site at goatcounter.com and set `GOATCOUNTER` in `links.js` to its code.
