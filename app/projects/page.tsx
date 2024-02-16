import { subtitle, title } from "@/components/primitives";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Projects } from "@/components/projects";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter,  useDisclosure} from "@nextui-org/modal";
import { Button } from "@nextui-org/button";


export default function DocsPage() {
  return (
	<>
    <div className="gap-4 columns-1 sm:columns-2 mt-2">
		{Projects.data.map((data) => (
		<Card key={data.title} className="py-4 text-left my-5" isHoverable isPressable>
			<CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
			<p className="text-tiny uppercase font-bold">{data.subtitle}</p>
			<small className="text-default-500">{data.tech}</small>
			{/* {data.icon && (
				<data.icon/>
			)} */}
			<h4 className="font-bold text-large">{data.title}</h4>
			</CardHeader>
			<CardBody className="overflow-visible py-2">
			<Image
				isZoomed
				alt="Card background"
				className="object-cover rounded-xl"
				src={data.image}
			/>
			</CardBody>
		</Card>
	  ))}
    </div>
	</>
  );
}
