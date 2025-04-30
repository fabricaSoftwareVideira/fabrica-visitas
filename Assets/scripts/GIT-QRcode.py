import qrcode

img = qrcode.make('https://github.com')

type(img)
img.save("qrCodeGit.png")