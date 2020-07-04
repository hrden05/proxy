# proxy
Combining all containers into one
(With all our powers combined)

-----

### Wanna mess with the proxy? 
1. Download the 'FEC-proxy.pem' file. Oh look, a neat link to download it:  <a download='FEC-proxy.pem' href='https://github.com/hrden05/proxy/blob/master/FEC-proxy.pem'>Whattt?</a> <sup>It's silly, right click and _'Save Link As...'_<sup>
2. Wherever you download and then place that _pem_ file, you totally know what to do! But here it is anyways:  
  - `chmod 400 FEC-proxy.pem`  
  - `ssh -i "FEC-proxy.pem" ec2-user@ec2-3-14-6-240.us-east-2.compute.amazonaws.com`  
3. Proxy [quicklink](http://ec2-3-14-6-240.us-east-2.compute.amazonaws.com/)
 
##### Note: docker, docker-compose, and git should all be downloaded to that _proxy pooter_
#### Making changes to the proxy files? 
 What I did to burpee it:
  1. `docker-compose down -v --rmi all`
  2. `git pull origin master`
  3. `docker-compose up --build`



<a href="./FEC-proxy.pem" download="FEC-proxy.pem" target="_blank">DL</a>
