# Setting Up GitHub OAuth for Decap CMS

To enable GitHub authentication for Decap CMS on your GitHub Pages site, follow these steps:

## 1. Create a GitHub OAuth App

1. Go to your GitHub account settings
2. Navigate to **Developer settings** > **OAuth Apps** > **New OAuth App**
3. Fill in the application details:
   - **Application name**: `Dustatron Site CMS` (or any name you prefer)
   - **Homepage URL**: `https://dustatron.github.io/dustatron-site`
   - **Application description**: (Optional) `CMS for managing dustatron-site content`
   - **Authorization callback URL**: `https://dustatron.github.io/dustatron-site/admin/auth`
4. Click **Register application**
5. On the next screen, note your **Client ID**
6. Click **Generate a new client secret** and note the generated secret

## 2. Update Your Configuration

1. Update your `public/admin/config.yml` file with your GitHub OAuth Client ID:

```yaml
backend:
  name: github
  repo: dustatron/dustatron-site
  branch: main
  base_url: https://dustatron.github.io
  auth_endpoint: dustatron-site/admin/auth
  client_id: YOUR_GITHUB_CLIENT_ID
```

2. Create a `.env` file in your project root (based on `.env.example`) and add your client secret:

```
GITHUB_OAUTH_CLIENT_SECRET=your_client_secret_here
```

## 3. Deploy Your Site

After making these changes, commit and push your code to GitHub. The GitHub Actions workflow will deploy your site with the updated configuration.

## 4. Test Authentication

1. Navigate to your deployed site at `https://dustatron.github.io/dustatron-site/admin`
2. Click the login button
3. You should be redirected to GitHub for authentication
4. After authenticating, you should be redirected back to your CMS

## Troubleshooting

If you encounter issues:

- Ensure your callback URL exactly matches what's configured in the GitHub OAuth App
- Check browser console for any errors
- Verify that your client ID is correctly set in `config.yml`
- Make sure your site is properly deployed with the latest changes