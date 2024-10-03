import { getApps, initializeApp, cert } from 'firebase-admin/app';

const activeApps = getApps();
const serviceAccount = {
  type: "service_account",
  project_id: "pagina-fisica",
  private_key_id: "e6e3a903e304bc16d7979c930c8ed6194e9859f2",
  private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCtWzLjUg28YK9h\ngpSo+MK98yiBGidBwnqTgYJousFibgOjxKV9424VuM/76zyGHNxkxWzac7xzOxmP\nsR5xPWDTSuxedctUsJSh8RnUd/n+f6bS2AEje7N8Wap4PpxNjtq1cY4Z5PP2973M\nImzHxyhliN6sSkzsZ4J8q2+tYIAGtxaDv8fGgg96KYHN3u7boFldLBUQnzNIhNuY\nWSWSIHx48wVInZXS3+tELC8vlm1q8WsFCsXiZij2ZU28E8gEC+bEdkGkttrnyU+p\ndo1SC05yGRoLiRk4hnXY0gPwIsnh+hSN9M9D5GqMGWlk2qc5CJ7VTj0OaUxDSA+M\nHvBya4dVAgMBAAECggEAClKR+mgWUiIGDMigLlqXtVoEuVaea/jsYHBXsgGdhngA\nu/r3lBeGOda7fbz2vuak4f7r2dXb7MGiEUTC8wvBrPs7DW82sxLhBYPsMuhiU2Wf\nAFLlPctodzkF9gCGa/YxGZj1f58QPuO8ImsSA/2yLwTs0Mtg1A/gJ350LoRT7fJW\nKlDeUCB5SU47qtZEXNQ+Zi3lc2CPBpQhIPLdL4qPdtt/76w/D+D6KFDvOXV6f7MP\nMYHIBxYCXq36/83lxF10zOXj4nGfVKrl1cs+rJEABPjk+5SrHt4SByyyBsDbp9Dy\nVl8POkrA6h+KL12fnX5n+OtKUmfvEhdlrLhfHHpHIQKBgQDzJseonQGDtxf8aF80\nd3R0WUS8N1os5pZ5aoNJxz0El6Iy16IXI9Sw35k96wZULvxXDrFDxoJsT0ERouao\nXDEiSqPrSV7YvSlVh+QEqcYYr8Z2U5mYdVnRj3SOF5poT/V5ZjQbB+LxzB8CJwvn\nHpZWJZPMcWN32EX3G1a9bfFvdQKBgQC2hERhEaYFOBqMYkAkjFsL2ao+IwrHNhgw\nra4Yjj3C6RYUWllnHTTIlvtajW/i1v6aP1TrXjQk3lqk3YZj4RZQ+V56vjxjm5cV\nI/TC9KO+1TdFTgZXL5EEZZz99unNvUvuUjgn5GMBgeginmOvtkBadCgm0mpm8hp0\nOso2DlGcYQKBgF/goMX58wju/4RF25SircbbFGFrKiGeYyNJPq+u4n6XFBwcLwwU\n0t9Tq+dgb0Ruqo3he0CQXAk9TxkXNQCaKb2t1OkIK2AnZs8VIHI+R6CgXw91c5FM\nZLhfasRExlvve4n9JPqrp29U371HjEf8JaeedaMd6uzs2NnRa+iSG6upAoGBAK1m\nFey+rqLwvVA4G8ZdTjaA8ducwSWn/+1nZCpSIN0nQuHNQHjVZ4tW3bAXBYBWT4bN\numjuk82fLjDJgV8svl3pvFgSmh7r9+qOwX/imhq4SI1gZme4eibaPv+M8G2VdSkT\nFeTYdzM8bwVMw1pxZMxK5MaVS59ITde07t3SVrihAoGBALn29hkIofvVDlw3eWvm\n4KCbjzn6GZx+zgkHu90cRrMIDtdfWhI2G0IyGtfJzT3RSwrAcKYaGFsjD4+Yn/8w\nypPiIQqrTwvXazXyhnGFQYboeSG2bscE9Q2/4+x5AU2GyGGR9M2uZRkHHK82WIY/\nmt5R0sll3Dk816hKcEziN6eE\n-----END PRIVATE KEY-----\n",
  client_email: "firebase-adminsdk-jt9d7@pagina-fisica.iam.gserviceaccount.com",
  client_id: undefined                            ,
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: undefined                                ,
  client_x509_cert_url: undefined                                  
};
const initApp = () => {
  return initializeApp({
    credential: cert(serviceAccount)
  });
};
const app = activeApps.length === 0 ? initApp() : activeApps[0];

export { app as a };
