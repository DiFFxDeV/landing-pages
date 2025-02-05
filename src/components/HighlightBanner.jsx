"use client";

import {
  Button,
  Image,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/react";
import React from "react";

const HighLightBanner = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <section
      style={{
        backgroundImage: `url('/images/bannerBG.jpg')`,
      }}
      className="bg-cover bg-center bg-no-repeat 
        min-h-[calc(100vh)] 
        flex items-center justify-center 
        py-8 sm:py-12 md:py-16 lg:py-20"
    >
      <div
        className="
        w-full max-w-4xl 
        mx-auto 
        px-4 sm:px-6 lg:px-8
      "
      >
        {/* Main Content Container */}
        <div
          className="
          w-full 
          bg-slate-100/95 
          rounded-lg 
          p-6 sm:p-8 md:p-10 lg:p-12
        "
        >
          <div
            className="
            flex flex-col 
            gap-2 sm:gap-8 md:gap-10 
            text-center
          "
          >
            {/* Title */}
            <h2
              className="
              text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
              font-bold 
              text-gray-800 
              leading-tight
            "
            >
              The Live Launch Playbook
            </h2>

            {/* Description */}
            <p
              className="
              text-base sm:text-lg md:text-xl lg:text-2xl 
              font-medium 
              text-gray-800 
              italic 
              max-w-2xl 
              mx-auto
            "
            >
              Get the Complete spreadsheet and planning system I have used to
              run multiple 5-and-6 figure launches!
            </p>

            {/* CTA Button */}
            <Button
              onPress={handleOpen}
              className="
                bg-yellow-300 
                hover:bg-yellow-400 
                text-gray-800
                font-semibold 
                text-xs sm:text-sm md:text-lg 
                px-6 sm:px-8 md:px-10 
                py-3 sm:py-4 
                rounded-lg
                transition-all 
                duration-300
                transform hover:scale-105
                shadow-md hover:shadow-lg
                mx-auto
                w-full sm:w-auto
                min-w-[200px]
              "
            >
              GET THE PLAYBOOK (REG $97, YOURS FREE)
            </Button>

            <div className="flex justify-center w-full">
              {" "}
              <div
                className="
                    relative 
                    w-64 
                    sm:h-full md:h-full lg:h-full 
                    mt-4 sm:mt-6
                    overflow-hidden
                    mx-auto"
              >
                <Image
                  src="/images/play-book.jpg"
                  alt="Playbook Preview"
                  layout="fill"
                  className="
                    w-full 
                    h-full 
                    object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={isOpen}
        onClose={handleClose}
        size="2xl"
        className="mx-4 sm:mx-auto"
      >
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1 p-6">
            <h3 className="text-xl text-gray-700 sm:text-2xl md:text-3xl font-bold">
              One Quick step!{" "}
            </h3>
          </ModalHeader>

          <ModalBody className="px-6 py-4">
            <div className="flex flex-col gap-6">
              <p className="text-gray-600 font-medium sm:text-lg">
                Enter your details below to receive the Live Launch Playbook
              </p>

              {/* Form Fields */}
              <div className="space-y-4">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-3 border rounded-lg text-base"
                />
                <input
                  type="text"
                  name="F-name"
                  placeholder="First Name"
                  className="w-full p-3 border rounded-lg text-base"
                />
                <input
                  type="text"
                  name="L-name"
                  placeholder="Last Name"
                  className="w-full p-3 border rounded-lg text-base"
                />
              </div>
            </div>
          </ModalBody>

          <ModalFooter className="p-6">
            <Button
              className="bg-yellow-300 font-semibold  text-xl hover:bg-yellow-400 w-full "
              onPress={handleClose}
            >
              Get The Playbook
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </section>
  );
};

export default HighLightBanner;
