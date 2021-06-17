1. **Git clone not working**

    Download the ZIP file: https://github.com/SAP-samples/teched2020-DEV267/archive/main.zip 

2. **EIntegrity error when running npm install** 

    Delete package-lock.json

    ```shell
    npm cache clear –force 
    ```

3. **EACCESS issue during npm install (MAC)** 

    run with “sudo …" 

4.  **syntaxError: Unexpected token 'export'**
        use even node version (for example 14.X)
        and/or run npm install in fiori folder 

        ```shell

        cd fiori
        npm install

        ```
5. **sqlite3 error when running cds watch** 

    ```shell
    cd fiori 

    npm install sqlite3 (locally) 

    npm install (in the same folder) 

    ```
6. **If cds watch cannot be executed in terminal (Windows)**

    File / Preferences / Settings: "terminal.integrated.shellArgs.windows": ["-ExecutionPolicy", "Bypass"] 

7. **App is displayed in wrong language**    
    Change Language in Google Chrome 

8. **Test Recorder is not displayed in Web Browser** 

    Deactivate popup blocker 
    
10. **Author or Genre popup is not opened** 

     Take care that you locate the button that is on the right side of the dropdown and not somewhere in between.

9. **Docker: Error response from daemon: i/o timeout (Windows)** 

    First try to restart Windows, then if the issue persists, restart docker and run in Admin CMD. If not fixed try these steps: 

   1. Open "Window Security" 
   2. Open "App & Browser control" 
   3. Click "Exploit protection settings" at the bottom 
   4. Switch to "Program settings" tab 
   5.  Locate "C:\WINDOWS\System32\vmcompute.exe" in the list and expand it 
   6.  Click "Edit" 
   7.  Scroll down to "Code flow guard (CFG)" and uncheck "Override system      settings" 
   8.  Delete all files from C:\Users\\&lt;name&gt;\AppData\Roaming\Docker 
   9.  Start vmcompute from powershell "net start vmcompute"  

10. **Error response from daemon: open \\.\pipe\docker_engine_linux: The system cannot find the file specified (Windows)** 

    Try to fix with some of these: 
    - Restart Windows 
    - Run CMD in Admin mode 
    - Check your VMWare tools version - 11.0.1 seems to be problematic 
    - Reinstall docker 

11. **If there is some problem with generating initial-credentials** 

    Get container id

    `docker ps`

    copy the id for jenkins container 

    Login to container 
    
    `docker exec –it <container_id> bash`
    
    and  `rm /var/jenkins_home/config.xml `

12. **Permission denied while trying to connect to the Docker daemon socket**
    To fix the problem, use the step process guide below:

    
    Step 1.Get container id

        `docker ps`

    Step 2. Go inside to Jenkins container using a root user, run command:

        `docker exec -u 0 -it <container id> bash`

    Step 2. Then change the ownership of the file using your jenkins user, type command:

        `sudo chown jenkins:jenkins /var/run/docker.sock`

    Step 3. Verify the file permission, type command:

         `ls -lah /var/run/docker.sock`
    Output:

        srw-rw-rw- 1 jenkins jenkins 0 DEC 10 14:30 /var/run/docker.sock
 
    Step 4. Restart container

        `docker restart <container id>`

