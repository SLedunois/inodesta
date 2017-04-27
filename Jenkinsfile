pipeline {
  agent any
  stages {
    stage('install packages') {
      steps {
        sh '''echo "$USER"
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