## Docker commands

docker build -t nodeexample:v1 .
docker run -itd -p 3000:3000 --name nodeexamplecontainer nodeexample:v1
docker login

docker tag localimage destinationImagePath
docker tag nodexample:v1 ssuresh5b/first-repo:v1

## Kubernetes commands

minikube start

kubectl create deployment nodexample --image ssuresh5b0/first-repo:v1 --dry-run=client -o yaml > ./k8s/deployment.yaml

kubectl apply -f ./k8s/deployment.yaml

kubectl expose deployment nodexample --port=80 --target-port=3000 --type=LoadBalancer --dry-run=client -o yaml > ./k8s/service.yaml

kubectl apply -f ./k8s/servie.yaml

kubectl apply -f ./k8s/deployment.yaml
kubectl apply -f ./k8s/service.yaml

--bash
kubectl expose deployment nodexample \
 --port=80 \
 --target-port=3000 \
 --type=LoadBalancer \
 --dry-run=client -o yaml > ./k8s/service.yaml

kubectl get namespaces
kubectl get deployment
kubectl get service
kubectl desc deployment name
kubectl desc service name
kubectl get endpoints nodeexampleservice(servicename)
minikube service nodexampleservice --url

kubectl create deployment nginx --image=nginx --dry-run=client -o yaml > ./k8s/nginx-deployment.yaml

kubectl expose deployment nginx --port=80 --type=LoadBalancer --dry-run=client -o yaml > ./k8s/nginx-service.yaml

kubectl apply -f ./k8s/nginx-deployment.yaml
kubectl apply -f ./k8s/nginx-service.yaml

kubectl delete deployment nginx
kubectl delete service nginx

##If you just want to delete all deployments, services, pods, etc. in your current namespace (usually default):

kubectl delete all --all

## This deletes:

Pods

Services

Deployments

ReplicaSets

DaemonSets

StatefulSets

## Jobs

If you want to wipe out everything across all namespaces (be careful):
kubectl delete all --all --all-namespaces

minikube delete

🔍 What kubectl delete all --all Actually Deletes

It will remove:

Resource Type Examples it removes
Pods Individual pods, crashlooping pods, etc.
Deployments Apps running via kubectl create deployment
Services ClusterIP, NodePort, LoadBalancer
ReplicaSets Automatically managed by deployments
StatefulSets If any exist
DaemonSets Daemon-type workloads (less common in dev)
Jobs One-off or batch jobs
CronJobs Scheduled jobs

kubectl delete all --all --all-namespaces
kubectl delete pvc --all --all-namespaces
kubectl delete configmap --all --all-namespaces
kubectl delete secret --all --all-namespaces

## push code

…or create a new repository on the command line
echo "# nodeexample" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main (master)
git remote add origin remote repo
git push -u origin main
git push -u origin master

…or push an existing repository from the command line
git remote add origin remote repo
git branch -M main(master)
git push -u origin main
git push -u origin master

## Git commands

git checkout -b feature/nodeexample1
git pull origin main

### Create and switch to the feature branch

git checkout -b feature/login-page

### Work on your code...

## Stage and commit changes

git add .
git commit -m "commit message"

## Push the branch to remote

git push -u origin feature/login-page

## Step 1: Make sure you're on your feature branch

git checkout feature/your-feature-name

## Step 2: Pull latest changes from main into your feature branch

git pull origin main(master)
