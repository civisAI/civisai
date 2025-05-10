# Deployment Guide

This document outlines the deployment process for the CivisAI application on the Sevalla platform.

## Prerequisites

1. A Sevalla account with API access
2. GitHub repository with the following secrets configured:
   - `SEVALLA_API_KEY`: Your Sevalla platform API key
   - `VITE_API_URL`: The URL of your backend API (e.g., `https://api.civisai.com`)

## Deployment Process

The application uses GitHub Actions for continuous deployment. There are two separate workflows:

1. Frontend Deployment (`frontend-deploy.yml`)
2. Backend Deployment (`backend-deploy.yml`)

### Automatic Deployments

Deployments are triggered automatically when:
- Changes are pushed to the `main` branch
- Pull requests are created against the `main` branch

The workflows will:
1. Build the application
2. Deploy to staging (for pull requests) or production (for main branch)
3. Configure environment variables

### Manual Deployments

To trigger a manual deployment:

1. Go to the GitHub repository
2. Navigate to the "Actions" tab
3. Select the desired workflow (frontend or backend)
4. Click "Run workflow"
5. Select the branch to deploy from
6. Click "Run workflow"

## Environment Variables

### Frontend

- `VITE_API_URL`: The URL of the backend API

### Backend

- `PORT`: The port number (default: 3001)
- `NODE_ENV`: The environment (production/staging)

## Deployment URLs

- Frontend:
  - Production: `https://civisai.com`
  - Staging: `https://staging.civisai.com`

- Backend:
  - Production: `https://api.civisai.com`
  - Staging: `https://api.staging.civisai.com`

## Monitoring

After deployment, you can monitor your application:
1. Logs: View application logs in the Sevalla dashboard
2. Metrics: Monitor performance and resource usage
3. Alerts: Set up alerts for critical issues

## Troubleshooting

If you encounter deployment issues:

1. Check the GitHub Actions workflow logs
2. Verify environment variables are correctly set
3. Ensure the Sevalla API key has the necessary permissions
4. Check the Sevalla dashboard for application logs

## Rollback

To rollback to a previous version:

1. Go to the Sevalla dashboard
2. Navigate to the application
3. Select "Deployments"
4. Choose the version to rollback to
5. Click "Rollback" 