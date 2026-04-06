# QuantiCalc — Angular

Full Angular 17 implementation of the QuantiCalc measurement intelligence app.

---

## Tech Stack

| Concern               | Solution                          |
|-----------------------|-----------------------------------|
| Framework             | Angular 17 (Standalone Components)|
| Styling               | SCSS + Angular Material            |
| HTTP Client           | Angular HttpClient (+ Axios note) |
| Forms                 | Angular Reactive Forms             |
| State                 | Angular Signals                   |
| Auth / Session        | JWT + localStorage via AuthService|
| Routing               | Angular Router (lazy-loaded)      |
| UI Components         | Angular Material                  |
| Responsive            | SCSS Media Queries                |
| Google Auth           | Google Identity Services          |

---

## Folder Structure

```
src/
├── app/
│   ├── core/
│   │   ├── guards/
│   │   │   └── auth.guard.ts            ← Route protection
│   │   ├── interceptors/
│   │   │   └── auth.interceptor.ts      ← Attaches JWT to every request
│   │   ├── models/
│   │   │   ├── models.ts                ← All interfaces/types
│   │   │   └── units.constants.ts       ← Unit labels, op labels
│   │   └── services/
│   │       ├── auth.service.ts          ← Login, Register, Google, Session
│   │       ├── quantity.service.ts      ← All API operations
│   │       └── toast.service.ts         ← Global notifications
│   │
│   ├── shared/
│   │   └── components/
│   │       ├── header/                  ← Topbar (Input: title, apiOnline)
│   │       ├── sidebar/                 ← Nav sidebar (Input/Output: open)
│   │       ├── toast/                   ← Global toast container
│   │       └── operation-card/          ← Reusable measurement card
│   │                                       (Input: category, emoji, desc)
│   ├── features/
│   │   ├── home/                        ← Dashboard with quick cards
│   │   ├── length/                      ← Uses <app-operation-card>
│   │   ├── weight/                      ← Uses <app-operation-card>
│   │   ├── volume/                      ← Uses <app-operation-card>
│   │   ├── temperature/                 ← Uses <app-operation-card>
│   │   ├── history/                     ← Auth-gated history with filters
│   │   └── auth/                        ← Material Dialog login/register
│   │
│   ├── app.component.ts/html/scss       ← Root shell
│   ├── app.routes.ts                    ← Lazy-loaded routes
│   └── app.config.ts                    ← Providers (HttpClient, Animations)
│
├── environments/
│   ├── environment.ts                   ← Dev (apiBase, googleClientId)
│   └── environment.production.ts
│
├── index.html
├── main.ts
└── styles.scss                          ← Global CSS vars + Material theme
```

---

## Setup

### 1. Install dependencies
```bash
cd quanticalc-angular
npm install
```

### 2. Configure environment
Edit `src/environments/environment.ts`:
```ts
export const environment = {
  production: false,
  apiBase: 'http://localhost:5000/api/v1',
  googleClientId: 'YOUR_GOOGLE_CLIENT_ID'
};
```

### 3. Run the app
```bash
npm start
# Opens at http://localhost:5500
```

### 4. Build for production
```bash
npm run build
# Output in dist/quanticalc-angular/
```

---

## Backend CORS (required)

Add this to your ASP.NET Core `Program.cs`:

```csharp
builder.Services.AddCors(options => {
  options.AddPolicy("AllowFrontend", policy => {
    policy.WithOrigins("http://localhost:5500", "http://127.0.0.1:5500")
          .AllowAnyHeader()
          .AllowAnyMethod();
  });
});

// After builder.Build():
app.UseCors("AllowFrontend");  // Must be before UseAuthorization
```

---

## Angular Concepts Demonstrated

| Concept                    | Where Used                                       |
|----------------------------|--------------------------------------------------|
| Standalone Components      | Every component                                  |
| Signals (State)            | AuthService, ToastService, AppComponent          |
| Reactive Forms             | AuthDialogComponent, OperationCardComponent      |
| HttpClient + Interceptor   | QuantityService + auth.interceptor.ts            |
| Input / Output (Props)     | HeaderComponent, SidebarComponent, OperationCard |
| Component Composition      | OperationCard reused in all 4 feature pages      |
| Lazy Loading (Routes)      | app.routes.ts — all features loadComponent       |
| Auth Guard                 | auth.guard.ts                                    |
| NgIf / NgFor               | All templates                                    |
| Dynamic Class Binding      | [class.active], [class.open], [class.has-error]  |
| Lifecycle Hooks            | ngOnInit in Home, History, OperationCard         |
| Angular Material           | Dialog, FormField, Button, Select, Spinner, Card |
| SCSS + Media Queries       | All component .scss files                        |
| Session Management         | localStorage via AuthService                     |
| Google Auth                | AuthDialogComponent + Google Identity Services   |
| forkJoin (RxJS)            | HistoryComponent — parallel history fetch        |
