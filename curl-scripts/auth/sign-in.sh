# curl "https://library-express-api.herokuapp.com/sign-in" \
#!/bin/bash
API="https://tic-tac-toe-api-development.herokuapp.com"
URL_PATH="/sign-up"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'"
    }
  }'

echo
