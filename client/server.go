package main

import "net/http"
import "fmt"

func main() {
  var folder = "./build"
  fmt.Printf("server is running on http://0.0.0.0:3000 on %s", folder)
  http.ListenAndServe(":3000", http.FileServer(http.Dir(folder)))
}
