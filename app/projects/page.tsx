"use client";
import React, { useState } from "react";
import { subtitle, title } from "@/components/primitives";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Projects } from "@/components/projects";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/modal";
import { Button } from "@nextui-org/button";


export default function ProjectsPage() {
	const { isOpen, onOpen, onOpenChange } = useDisclosure();
	const [activeModalTitle, setActiveModalTitle,] = useState("");
	const [activeModalSubtitle, setActiveModalSubtitle] = useState("");
	const [activeModalImage, setActiveModalImage] = useState("");
	const [activeModalAbout, setActiveModalAbout] = useState("");

	const openModal = (title: React.SetStateAction<string>, subtitle: React.SetStateAction<string>, image: React.SetStateAction<string>, about: React.SetStateAction<string>) => {
		setActiveModalTitle(title);
		setActiveModalSubtitle(subtitle);
		setActiveModalImage(image);
		setActiveModalAbout(about);
		onOpen();
	};
	return (
		<>
			<div className="gap-4 columns-1 sm:columns-2 mt-2">
				{Projects.data.map((data) => (
					<React.Fragment key={data.id}>
						<Card
							className="text-left my-5"
							isHoverable
							isPressable
							shadow="sm"
							onPress={() => openModal(data.title, data.subtitle, data.image, data.about)}
						>
							<Image
								radius="none"
								isZoomed
								alt="Card background"
								src={data.image}
							/>

							<CardBody className="overflow-visible m-2">
								<h4 className="font-bold text-large">{data.title}</h4>
								<p className="mb-3 mt-1">{data.subtitle}</p>
								<div className="flex items-center">
									{data.icon && data.icon.map((IconComponent, index) => (
										<IconComponent key={index} className="text-default-500 mr-2 h-5" />
									))}
								</div>

							</CardBody>
						</Card>

						<Modal
							isOpen={isOpen}
							backdrop="blur"
							size="xl"
							onOpenChange={onOpenChange}
						>
							<ModalContent>
								{(onClose) => (
									<>
										<ModalHeader className="flex flex-col gap-1">
											{activeModalTitle}
										</ModalHeader>
										<ModalBody>
											<div className="flex flex-col">
												<div>{activeModalSubtitle}</div>
												<div className="my-4">
													<Image
														alt="Card background"
														src={activeModalImage}
													/>
												</div>
												<div>{activeModalAbout}</div>
											</div>
										</ModalBody>
										<ModalFooter>
											<Button color="danger" variant="light" onPress={onClose}>
												Close
											</Button>
										</ModalFooter>
									</>
								)}
							</ModalContent>
						</Modal>
					</React.Fragment>
				))}
				<Card>
					<CardBody >
						<p className="text-center">soon.</p>
					</CardBody>
				</Card>
			</div>
		</>
	);
}
