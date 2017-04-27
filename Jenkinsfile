pipeline {
  agent any
  stages {
    stage('install packages') {
      steps {
        sh 'npm install'
      }
    }
    stage('Cover') {
      steps {
        sh 'npm run cover'
      }
    }
  }
}