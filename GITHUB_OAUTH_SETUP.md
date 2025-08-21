# Setting Up GitHub Authentication for Decap CMS

To enable GitHub authentication for Decap CMS on your GitHub Pages site, follow these steps:

## 1. Create a GitHub OAuth App

1. Go to your GitHub account settings
2. Navigate to **Developer settings** > **OAuth Apps** > **New OAuth App**
3. Fill in the application details:
   - **Application name**: `Dustatron Site CMS` (or any name you prefer)
   - **Homepage URL**: `https://dustatron.github.io/dustatron-site`
   - **Application description**: (Optional) `CMS for managing dustatron-site content`
   - **Authorization callback URL**: `https://dustatron.github.io/dustatron-site/admin`
4. Click **Register application**
5. On the next screen, note your **Client ID**
6. You don't need to generate a client secret for this authentication method

## 2. Update Your Configuration

Your `public/admin/config.yml` file has been updated with the correct GitHub authentication configuration:

```yaml
backend:
  name: github
  repo: dustatron/dustatron-site
  branch: main
  site_domain: dustatron.github.io
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

- Make sure your GitHub OAuth App is correctly configured
- Ensure the **Authorization callback URL** is set to `https://dustatron.github.io/dustatron-site/admin`
- Check browser console for any errors
- Verify that your site domain is correctly set in `config.yml`
- Make sure your site is properly deployed with the latest changes
- Try clearing your browser cache and cookies
- Check that you have the correct permissions for the repository