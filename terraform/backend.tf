terraform {
  backend "s3" {
    bucket         = "fugedemirok-terraform-state"  # Replace with the actual bucket name if different
    key            = "www.fugedemirok.com/terraform.tfstate"    # Change this to the desired path within the bucket
    region         = "us-west-2"                    # Specify the correct region for the bucket
    encrypt        = true                           # Encrypt the state file at rest
  }
}
