## Hi, it's <b>Reagg!</b>

### A Website created using PERN (Postgresql, Express.js, React and Node.js) Architecture which can help all problems in your life. Hope you like it! 🤙


---
## Running in development

Backend Folder: Api
Frontend Folder: Client

Run Frontend: 
```
npm run dev-fe
```

Run Backend: 
```
npm run dev-be
```

Build Frontend: 
```
npm run build-fe
```

Build Backend: 
```
npm run build-be
```

My usual path for development:
1. Run frontend :3000/*
2. Run backend :8000/api/v1/*
3. Run tsc watch - api/tsconfig.json

Staging before deployment:
1. Build frontend
2. Run backend :8000/*

---

## Deployment notes

### Config on vanilla server:
1. install git 
  ```
    sudo yum install git
  ```
2. install nvm (different in every host server)
3. install node with same version as the project 
  ```
  nvm install v14.15.1
  ```
4. install latest npm
  ```
  npm install -g npm@latest
  ```
5. install "forever" for run app
  ```
  npm install -g forever 
  ```
6. (optional) install dbms
### Deploying app using git:
1. git clone repo (maybe need more config on private repo)
2. npm install all modules (root, api, client)
3. (optional) maybe need to move folder or change dir and clean old folder
### Run app on server by running the backend(port api):
1. Running the app
  ```
  forever start -c "npm start". 
  ```
  > not quite sure the script, not even tested yet.
2. Check the running app
  ```
  forever list
  ```
3. map port api (8000) to http port (80)
  ```
  sudo iptables -t nat -A PREROUTING -p tcp --dport 80 -j REDIRECT --to-ports 8000
  ```
  > dont forget to add http rule (tcp 80) on host server from anywhere ip

---

##### Author : @fayaadbsa