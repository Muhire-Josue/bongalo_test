Follow the instructions bellow to run the API

### Requirements
- `Nodejs v10-13` - a JavaScript run-time environment that executes JavaScript code outside of a browser
- `POSTGRES` - a database management system for data persistence

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install dependencies and running some pre-defined scripts.

Download the project
```bash
git clone https://github.com/Muhire-Josue/bongalo_test.git
```
cd into the project
```bash
cd bongalo_test/
```
Install dependencies
```bash
npm install
```
Run server
```bash
npm run dev
```

## Usage

```
Head over to postman (or web browser) and hit this URL GET: http://localhost:3000
```
### API ENDPOINTS
| API | Methods  | Description  |
| ------- | --- | --- |
| `/` | GET | Welcome message |
| `api/user/create` | POST | Create account |
| `api/user/login` | POST | Login |
| `api/accommodation` | POST | List accommodation |

## License
- None
