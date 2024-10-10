provider "aws" {
  region = "us-west-2"  # Ensure this matches your region
}

# S3 Bucket for www.fugedemirok.com (public static website)
resource "aws_s3_bucket" "www_fugedemirok_com" {
  bucket = "www.fugedemirok.com"
}

# S3 Bucket for fugedemirok.com (redirects to www.fugedemirok.com)
resource "aws_s3_bucket" "fugedemirok_com" {
  bucket = "fugedemirok.com"

  website {
    redirect_all_requests_to = "https://www.fugedemirok.com"
  }

  # No policy needed for redirect-only bucket
}
