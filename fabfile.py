from fabric.api import env, roles, run, cd

# Define sets of servers as roles
env.roledefs = {
    'web': ['marketersagainstwaste.com'],
}

# Set the user to use for ssh
env.user = 'piston'


@roles('web')
def deploy_master():
    with cd('~/marketersagainstwaste.com'):
        run('git checkout master')
        run('git pull origin master')
        run('grunt build')