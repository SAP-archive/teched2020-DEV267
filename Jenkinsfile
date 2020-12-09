#!/usr/bin/env groovy
@Library(['piper-lib-os']) _

node {
    stage("System tests") {
        // Delete all old files to begin with clean workspace
        sh 'rm -rf ${WORKSPACE}/*'
       
        // Checkout git repository wich contains the application and UIVeri5 tests
        // Git url is propageted through the pipelines configuration 
        git url: scm.userRemoteConfigs[0].url, branch: "jenkinsExercise"
           
        // Setup the environment to start the application with CAP server - npm install of all required tools
        // and execute UIVeri5 system tests
        uiVeri5ExecuteTests script: this,
        installCommand: "npm install @sap/cds --global --quiet && NPM_CONFIG_PREFIX=/home/node/.npm-global npm install @sap/cds-dk --global --quiet --force && NPM_CONFIG_PREFIX=/home/node/.npm-global npm install @ui5/uiveri5 --global --quiet && npm install --force && cd fiori && (/home/node/.npm-global/lib/node_modules/@sap/cds/bin/cds.js watch > cds.log 2>&1 &)",
        runCommand: "sleep 10 && cd ${WORKSPACE}/fiori/app/admin/webapp/test/uiveri5/ && /home/node/.npm-global/lib/node_modules/@ui5/uiveri5/bin/uiveri5 --seleniumAddress='http://selenium:4444/wd/hub' --baseUrl='http://npm:4004/fiori.html#manage-books' -v"
        
        // HTML Publisher plugin
        // Publish Test Report for UIVeri5 on Jenkins   
        publishHTML target: [
            allowMissing: true,
            alwaysLinkToLastBuild: true,
            keepAll: true,
            reportDir: './fiori/app/admin/webapp/test/uiveri5/target/report/screenshots',
            reportFiles: "report.html",
            reportName: "UIVeri5 Test Report"
        ]
    }
}
