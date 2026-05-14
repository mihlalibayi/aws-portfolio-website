#!/bin/bash
set -e

echo "Syncing files to S3..."
aws s3 sync . s3://mihlali-bayi-portfolio \
  --delete \
  --exclude ".git/*" \
  --exclude ".gitignore" \
  --exclude "README.md" \
  --exclude "deploy.sh" \
  --exclude "*.md" \
  --exclude "docs/*"

echo "Invalidating CloudFront cache..."
aws cloudfront create-invalidation \
  --distribution-id E2NS0ZPAW7U2PM \
  --paths "/*"

echo "Deploy complete."