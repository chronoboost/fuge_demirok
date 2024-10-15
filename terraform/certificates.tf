provider "aws" {
  alias  = "us_east_1"
  region = "us-east-1"
}

# ACM Certificate for www.fugedemirok.com and fugedemirok.com in us-east-1
resource "aws_acm_certificate" "fugedemirok_cert" {
  provider         = aws.us_east_1
  domain_name      = "fugedemirok.com"
  validation_method = "DNS"

  subject_alternative_names = [
    "www.fugedemirok.com"
  ]

  lifecycle {
    create_before_destroy = true
  }
}

# Automatically validate the ACM certificate
resource "aws_acm_certificate_validation" "fugedemirok_cert_validation" {
  provider        = aws.us_east_1
  certificate_arn = aws_acm_certificate.fugedemirok_cert.arn
}
