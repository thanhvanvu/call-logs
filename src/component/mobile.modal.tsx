import { Modal } from "antd";
import React from "react";
import android from "public/android.gif";
import safari from "public/safari.gif";
import Image from "next/image";
interface IProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}
// onOk={handleOk} onCancel={handleCancel}
function MobileModal(props: IProps) {
  const { open, setOpen } = props;
  return (
    <div className="w-72">
      <Modal
        title="Best Viewed on Desktop"
        style={{ top: 20 }}
        open={open}
        onOk={() => {
          setOpen(false);
          // Save data to sessionStorage
          sessionStorage.setItem("mobileModal", "false");
        }}
        onCancel={() => {
          setOpen(false);
          // Save data to sessionStorage
          sessionStorage.setItem("mobileModal", "false");
        }}
      >
        <p>For an optimal experience, we recommend using a PC or laptop.</p>
        <p>Or enable &ldquo;Desktop site&ldquo; on your mobile browser settings.</p>
        <div className="flex justify-around mt-4 mb-4">
          <div>
            <Image
              alt=""
              src={android}
              height={325}
              width={150}
              objectFit="cover"
              className="h-[325px] w-auto object-cover border border-black"
            />
            <p className="text-center mt-2">Android browser.</p>
          </div>

          <div>
            <Image
              alt=""
              src={safari}
              height={325}
              width={150}
              className="h-[325px] w-auto object-cover border border-black"
            />
            <p className="text-center mt-2">Safari browser.</p>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default MobileModal;
