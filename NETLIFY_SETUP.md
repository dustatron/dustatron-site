# Setting Up Netlify Authentication for Decap CMS

To enable Netlify authentication for Decap CMS on your Netlify site, follow these steps:

## 1. Enable Identity in Netlify

1. Go to your Netlify site dashboard
2. Navigate to **Settings** > **Identity**
3. Click **Enable Identity**
4. Configure registration preferences:
   - Set registration to "Open" or "Invite only" based on your needs
   - Enable "Confirm" to require email confirmation for new users

## 2. Configure External Providers (Optional)

1. In the Identity settings, scroll to **External providers**
2. Click **Add provider** to enable GitHub, GitLab, Bitbucket, or Google authentication
3. Configure each provider according to your needs

## 3. Enable Git Gateway

1. In the Identity settings, scroll to **Services**
2. Click **Edit settings** next to Git Gateway
3. Toggle **Enable Git Gateway** to ON
4. Select your Git provider (GitHub, GitLab, or Bitbucket)
5. Click **Generate access token** to create a new access token

## 4. Update Your Configuration

Your `public/admin/config.yml` file has been updated with the correct Netlify authentication configuration:

```yaml
backend:
  name: git-gateway
  branch: main
```

## 5. Deploy Your Site

After making these changes, commit and push your code to your Git repository. Netlify will automatically deploy your site with the updated configuration.

## 6. Test Authentication

1. Navigate to your deployed site at `https://your-site-name.netlify.app/admin`
2. Click the login button
3. You should be able to register or log in using email/password or external providers
4. After authenticating, you should be redirected back to your CMS

## Troubleshooting

If you encounter issues:

- Make sure Git Gateway is enabled in your Netlify Identity settings
- Ensure your site is properly deployed with the latest changes
- Check that your Netlify site is connected to your Git repository
- Try clearing your browser cache and cookies
- Check the browser console for any errors