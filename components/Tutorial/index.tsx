import { View, Text, Icon, IconProps } from "reshaped/bundle";
import sdk from "@stackblitz/sdk";
import Check from "../Icons/Play/Check";
import Clock from "../Icons/Play/Clock";
import VideoBox from "../VideoBox";

// sdk.embedProjectId("playground", "nextjs-2jqmx4", {
//   forceEmbedLayout: true,
//   openFile: "src/components/Query.tsx",
//   hideExplorer: true,
//   hideNavigation: true,
// });

const Tutorial = () => {
  return (
    <>    
    <div className="grid grid-cols-8 gap-6">
      {/* video */}
      <div className="col-start-1 col-span-3">
        <VideoBox/>
      </div>

      {/* info */}
      <div className="col-start-4 col-span-5 h-full">
        <div className="flex flex-col justify-between h-full">
          {/* upper part */}
          <div className="flex flex-col gap-1">
            <View direction="row" align="center" gap={2}>
            <Text variant="caption-1" weight="medium" className="text-surface-200">JUNE 5</Text>
            <View height={1} width={1} borderRadius="circular" className="bg-surface-400"></View>
            <Text variant="caption-1" weight="medium" className="text-surface-200">445 VIEWS</Text>
            </View>
            <View>
              <Text variant="featured-3" weight="bold">Guide how to implement GQty in your project</Text>
            </View>
          </div>

          {/* lower part */}
          <div>
            <View direction="row" align="center" gap={2} >
              <Icon svg={<Clock/>} size={5}/>
              <Text variant="body-2" weight="bold" className="text-surface-200">2 mins</Text>
            </View>
          </div>
        </div>
      </div>

    </div>

   
    
    </>

  );
};

export default Tutorial;
