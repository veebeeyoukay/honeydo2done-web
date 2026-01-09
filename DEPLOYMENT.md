# Netlify Deployment Guide

## Quick Deploy

1. **Connect Repository to Netlify**
   - Go to [Netlify Dashboard](https://app.netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub and select `veebeeyoukay/honeydo2done-web`
   - Netlify will auto-detect Next.js settings

2. **Configure Build Settings**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Node version: `20`

3. **Set Environment Variables**
   In Netlify Dashboard → Site settings → Environment variables, add:
   
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
   NEXT_PUBLIC_MIXPANEL_TOKEN=your_mixpanel_token
   NEXT_PUBLIC_GA_ID=your_ga_id
   NEXT_PUBLIC_APP_STORE_IOS_URL=https://apps.apple.com/app/honeydo2done
   NEXT_PUBLIC_APP_STORE_ANDROID_URL=https://play.google.com/store/apps/details?id=com.honeydo2done
   ```

4. **Deploy**
   - Click "Deploy site"
   - Netlify will build and deploy automatically
   - Your site will be available at `https://your-site-name.netlify.app`

5. **Custom Domain (Optional)**
   - Go to Site settings → Domain management
   - Add custom domain: `honeydo2done.com`
   - Follow DNS configuration instructions

## Pre-Deployment Checklist

- [ ] Supabase `email_leads` table created (see README.md)
- [ ] Environment variables configured in Netlify
- [ ] App store badge images added to `/public/images/`
- [ ] Favicon added to `/public/`
- [ ] Test email capture functionality
- [ ] Verify analytics tracking

## Post-Deployment

1. **Verify Functionality**
   - Test all pages load correctly
   - Test email capture form
   - Check analytics events firing
   - Verify app store links work

2. **Performance Check**
   - Run Lighthouse audit
   - Verify Lighthouse Performance ≥ 95
   - Verify Lighthouse Accessibility = 100

3. **SEO Verification**
   - Check sitemap: `https://your-domain.com/sitemap.xml`
   - Check robots.txt: `https://your-domain.com/robots.txt`
   - Verify meta tags with browser dev tools

## Troubleshooting

**Build Fails:**
- Check Node version is 20
- Verify all dependencies in package.json
- Check build logs in Netlify dashboard

**Email Capture Not Working:**
- Verify Supabase credentials
- Check `email_leads` table exists
- Verify RLS policies allow inserts

**Analytics Not Tracking:**
- Verify Mixpanel and GA4 tokens
- Check browser console for errors
- Verify environment variables are set

## Next Steps

After successful deployment:
1. Set up custom domain
2. Configure SSL certificate (automatic with Netlify)
3. Set up form notifications (optional)
4. Configure redirects if needed
5. Set up monitoring and alerts
