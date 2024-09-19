"use client";

import { Badge, Button, Card, Image, Modal, Pill, Stack } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconBrandChrome, IconBrandGithub, IconPointFilled, IconX } from "@tabler/icons-react";

interface ProjectCardProps {
  name: string;
  githubLink: string;
  liveLink: string;
  description: React.ReactNode;
  stack: string[];
  imgSrc: string;
  tagLine: string;
}
export const ProjectCard = ({ name, githubLink, liveLink, description, stack, imgSrc, tagLine }: ProjectCardProps) => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <Card shadow="sm" radius="lg" className="font-sans bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 p-0.5">
        <div className="bg-background p-4 rounded-2xl h-full flex flex-col">
          <Card.Section p="sm">
            <Image src={imgSrc} height={160} alt="Norway" radius="md" className="shadow-[1px_1px_4px_2px] shadow-primary" />
          </Card.Section>

          <Stack justify="space-between" mt="md" mb="xs" className="relative gap-0">
            <text className="text-2xl text-primary font-semibold">{name}</text>
            <div className="flex absolute right-0 top-0 items-center justify-center animate-pulse">
              <Badge variant="outline" color="red" className="pr-4 w-auto">
                Live
              </Badge>
              <IconPointFilled size={15} color="red" className="-ml-[17px]" />
            </div>
            <text className="pr-14 text-foreground">{tagLine}</text>
          </Stack>

          <div className="text-foreground text-sm leading-6 tracking-wide line-clamp-3 mb-7">{description}</div>
          <Button onClick={open} variant="outline" mt="auto" radius="md" className="text-primary font-semibold border-primary shadow-[0px_0px_2px_1px] shadow-primary hover:text-foreground">
            Show More
          </Button>
        </div>
      </Card>
      <Modal opened={opened} onClose={close} padding={0} radius="lg" withCloseButton={false} size="lg" centered>
        <Card shadow="sm" radius="lg" className="font-sans bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 p-0.5 relative">
          <IconX size={32} className="absolute right-4 top-4 cursor-pointer hover:text-primary text-foreground" onClick={close} />
          <div className="bg-background p-4 rounded-2xl h-full flex flex-col">
            <Card.Section p="sm">
              <Image src={imgSrc} height={160} alt="Norway" radius="md" className="shadow-[1px_1px_4px_2px] shadow-primary" />
            </Card.Section>

            <Stack justify="space-between" mt="md" mb="xs" className="relative gap-0">
              <text className="text-2xl text-primary font-semibold">{name}</text>
              <div className="flex absolute right-0 top-0 items-center justify-center animate-pulse">
                <Badge variant="outline" color="red" className="pr-4 w-auto">
                  Live
                </Badge>
                <IconPointFilled size={15} color="red" className="-ml-[17px]" />
              </div>
              <text className="pr-14 text-foreground">{tagLine}</text>
            </Stack>

            <div className="text-foreground text-sm leading-6 tracking-wide">{description}</div>

            <div className="flex gap-8 mt-auto">
              <Button
                component="a"
                href={githubLink}
                target="_blank"
                fullWidth
                mt="md"
                radius="md"
                variant="outline"
                className="text-primary border-primary shadow-sm shadow-primary hover:text-primary hover:opacity-80"
                rightSection={<IconBrandGithub size={18} className="text-primary" />}
              >
                View Code
              </Button>
              <Button
                component="a"
                href={liveLink}
                target="_blank"
                fullWidth
                mt="md"
                radius="md"
                className="text-background bg-foreground shadow-sm shadow-primary hover:bg-foreground hover:text-background hover:opacity-80"
                rightSection={<IconBrandChrome size={18} className="text-background" />}
              >
                View Live
              </Button>
            </div>
            <Pill.Group className="mt-4">
              {stack.map((item) => (
                <Pill key={item} radius={6} className="shadow-[0px_0px_2px_1px] shadow-primary bg-foreground text-background font-semibold">
                  {item}
                </Pill>
              ))}
            </Pill.Group>
          </div>
        </Card>
      </Modal>
    </>
  );
};