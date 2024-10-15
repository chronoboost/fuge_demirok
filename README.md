# fuge demirok's website
we took her shopify website and turned it into a static s3 website bucket.
`terraform/` has all the terraform files, editing anything will trigger tf action
`content/` has all the static content, anything edited will be mirrored in s3

the cloudfront distribution, route 53 zone, and s3 buckets are all in elon's personal account.
