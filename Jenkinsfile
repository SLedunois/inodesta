pipeline {
  agent any
  stages {
    stage('install packages') {
      steps {
        sh '''export PATH=/usr/local/bin/npm:$PATH
npm install'''
      }
    }
    stage('Cover') {
      steps {
        sh 'npm run cover'
      }
    }
  }
}