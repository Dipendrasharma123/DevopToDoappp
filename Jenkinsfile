pipeline {
    agent any

    stages {

        stage('Clone Code') {
            steps {
                git 'https://github.com/Dipendrasharma123/DevopToDoappp.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t devopstodoapp .'
            }
        }

        stage('Deploy Container') {
            steps {
                sh 'docker run -d -p 3000:3000 devopstodoapp'
            }
        }
    }
}