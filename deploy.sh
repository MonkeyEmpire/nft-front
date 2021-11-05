#Execute as sudo
echo "Cloning Repo"
mkdir /home/gitlab-ci
cd /home/gitlab-ci
git clone https://gitlab+deploy-token-634291:nRTgD6kzaN_gxsBJospS@gitlab.com/samy.f/nft-front.git
cd nft-front

echo "Pulling Repo"
git pull https://gitlab+deploy-token-634291:nRTgD6kzaN_gxsBJospS@gitlab.com/samy.f/nft-front.git

echo "building repo"
yarn

echo "Stopping service"
systemctl stop nft-front.service

echo "starting service"
systemctl start nft-front.service