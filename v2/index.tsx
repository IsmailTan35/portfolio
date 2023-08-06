import React from "react";
import Image from "next/image";

const links = [
  {
    text: "Discord Klon",
    webLink: "https://discordclone.ismailtan.dev/",
    appLink: null,
    bgColor: "#404EED",
  },
  {
    text: "Three.js Satranç Oyunu",
    webLink: "https://chess3d.ismailtan.dev/",
    appLink: null,
    bgColor:
      "linear-gradient(45deg, rgb(254, 107, 139) 30%, rgb(255, 142, 83) 90%)",
  },
  {
    text: "Three.js Online Tank Oyunu",
    webLink: "https://waroftanks.ismailtan.dev/",
    appLink: null,
    bgColor: "rgba(0, 255, 0, 0.5)",
  },
  {
    text: "Github",
    webLink: "https://github.com/IsmailTan35",
    appLink: "github://user?username=IsmailTan35",
    bgColor: "#000",
  },
  {
    text: "Linkedin",
    webLink: "https://www.linkedin.com/in/ismailtan35/",
    appLink: "linkedin://profile?id=ismailtan35",
    bgColor: "#0A66C2",
  },
  {
    text: "Portfolyo",
    webLink: "https://blog.ismailtan.dev",
    appLink: null,
    bgColor: "#F44D4D",
  },
];
// eslint-disable-next-line @next/next/no-img-element

const V2 = () => {
  function openAppOrWeb(link: any) {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    var isLinkedInApp = /linkedin/.test(userAgent.toLowerCase());

    if (isLinkedInApp) {
      window.location.href = link.appLink;
    } else {
      window.open(link.webLink, "_blank");
    }
  }
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            width: "100%",
            maxWidth: "450px",
            backgroundColor: "#050925",
            boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: "100%",
              height: 186,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 10,
            }}
          >
            <div
              style={{
                width: 120,
                height: 120,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  backgroundColor: "#fff",
                  height: 100,
                  width: 100,
                  borderRadius: 50,
                  boxShadow: "0px 4px 0px 4px rgba(255,255,255,0.25)",
                  overflow: "hidden",
                }}
              >
                <Image
                  src="/image/myPicture.jpg"
                  alt="İsmail Tan"
                  width={100}
                  height={100}
                />
              </div>
            </div>
            <div
              style={{
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              İsmail Tan
            </div>
          </div>
          <div
            style={{
              width: "100%",
              height: 1,
              backgroundColor: "#fff",
              boxShadow: "0px 4px 10px 4px rgba(255,255,255,0.5)",
              zIndex: 1,
            }}
          ></div>
          <div
            className="wrapper"
            style={{
              overflowX: "hidden",
              maxWidth: "100%",
              overflowY: "auto",
              scrollbarWidth: "none",
            }}
          >
            <div
              style={{
                marginTop: 55,
                marginBottom: 55,
                display: "flex",
                flexDirection: "column",
                gap: 22,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {links.map((link, idx) => {
                return (
                  <div
                    key={idx}
                    style={{
                      width: "100%",
                      maxWidth: "309px",
                      height: "max-content",
                      display: "flex",
                      justifyContent: "space-between",
                      border: "1px solid #fff",
                      borderRadius: 5,
                      background: link.bgColor,
                      alignItems: "center",
                      gap: 22,
                      padding: "7px 10px",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      openAppOrWeb(link);
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <div
                        style={{
                          width: 40,
                          height: 40,
                          backgroundColor: "#fff",
                          borderRadius: "100%",
                        }}
                      >
                        <div
                          style={{
                            color: "#000",
                            width: "100%",
                            height: "100%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            rotate: "-45deg",
                            fontWeight: "bold",
                          }}
                        >
                          Tiso
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        width: "100%",
                      }}
                    >
                      {link.text}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default V2;
