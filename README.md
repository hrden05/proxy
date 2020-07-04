# proxy
Combining all containers into one
(With all our powers combined)

-----

### Wanna mess with the proxy?  ###### ![it's location](http://ec2-3-14-6-240.us-east-2.compute.amazonaws.com/)
1. Download the 'FEC-proxy.pem' file. Oh look, a neat link to download it:  ![whattt?]()
2. Wherever you download and then place that _pem_ file, you totally know what to do! But here it is anyways:  
  - `chmod 400 FEC-proxy.pem`  
  - `ssh -i "FEC-proxy.pem" ec2-user@ec2-3-14-6-240.us-east-2.compute.amazonaws.com`  
  
##### Note: docker, docker-compose, and git should all be downloaded to that <em>proxy pooter<em>
#### Making changes to the proxy files? 
 What I did to flip it:
  1. `docker-compose down -v --rmi all`
  2. `git pull origin master`
  3. `docker-compose up --build`
