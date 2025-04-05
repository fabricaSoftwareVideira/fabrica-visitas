import qrcode

img = qrcode.make('link do site do gihub')

type(img)
img.save("qrCodeGit.png")