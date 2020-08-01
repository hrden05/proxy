![Hipsy](https://i.ibb.co/cCZc12x/Screen-Shot-2020-08-01-at-1-56-07-PM.png)  
![Demo video](/Hipsy_demo.gif)
# proxy
Combining all containers into one
(With all our powers combined)

-----

### Wanna mess with the proxy? 
1. Download the 'FEC-proxy.pem' file. Oh look, a neat link to download it:  <a download='FEC-proxy.pem' href='https://github.com/hrden05/proxy/blob/master/FEC-proxy.pem'>Whattt?</a> <sup>It's silly, right click and _'Save Link As...'_<sup>   [!dead link]
2. Once downloaded, open a console where the _pem_ file exists and run the commands:
  - `chmod 400 FEC-proxy.pem`  
  - `ssh -i "FEC-proxy.pem" ec2-user@ec2-3-14-6-240.us-east-2.compute.amazonaws.com`  
3. Proxy [quicklink](http://ec2-3-14-6-240.us-east-2.compute.amazonaws.com/) [!dead link]
 
##### Note: docker, docker-compose, and git should all be downloaded to that _proxy pooter_
#### Making changes to the proxy files? 
 What I did to burpee it:
  1. `docker-compose down -v --rmi all`
  2. `git pull origin master`
  3. `docker-compose up` (once cd'ing into the proxy directory)  
  <sub>4. _And occasionally_: `docker system prune --all`</sub>  
  <sub>5. Then to check it's all empty: `docker system df`</sub>  
  
  `docker-compose down -v --rmi all; git pull origin master; docker-compose up`
