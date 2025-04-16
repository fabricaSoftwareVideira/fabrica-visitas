import qrcode

img = qrcode.make('https://sitefabrica.com/')

type(img)
img.save("qrCodeGit.png")