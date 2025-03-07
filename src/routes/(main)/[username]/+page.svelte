<script lang="ts">
    import { Button } from "$lib/components/ui/button";
    import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "$lib/components/ui/card";
    import { Input } from "$lib/components/ui/input";
    import { Label } from "$lib/components/ui/label";
    import { Tabs, TabsContent, TabsList, TabsTrigger } from "$lib/components/ui/tabs/index.js";
    import { Textarea } from "$lib/components/ui/textarea";
    import { Avatar, AvatarImage, AvatarFallback } from "$lib/components/ui/avatar";
    import { Badge } from "$lib/components/ui/badge";
    import { Switch } from "$lib/components/ui/switch";
    import { Mail, MapPin, Briefcase, Github, Twitter, Settings, Shield, User } from "lucide-svelte";
    import { sessionUser } from "$lib/token.js";

    let { data } = $props();

    let user = $state({
      ...data.data,
      roles: [...data.data.roles, { name: "User", color: "#ff0000" }, { name: "Moderator", color: "#f00" }],
      bio: "Product designer and developer based in New York. I enjoy creating intuitive, accessible user interfaces that solve real problems.",
      location: "New York, USA",
      company: "Design Systems Inc.",
      github: "TAFH-debug",
      twitter: "dtrtafh",
      joinDate: "January 2022"
    }); 
  
    let editMode = $state(false);
    let isSessionUser = $sessionUser?.id === user.id;
    
    let formData = $state({ ...user });
  
    function toggleEditMode() {
      if (editMode) {
        user = { ...formData };
      } else {
        formData = { ...user };
      }
      editMode = !editMode;
    }

    function handleSubmit() {
      user = { ...formData };
      editMode = false;
    }
  </script>
  
  <div class="container mx-auto py-10 px-4 max-w-5xl">
    <Tabs class="w-full">
      <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <TabsList>
          <TabsTrigger value="profile" class="flex items-center gap-2">
            <User size={16} />
            <span>Profile</span>
          </TabsTrigger>
          <TabsTrigger value="settings" class="flex items-center gap-2">
            <Settings size={16} />
            <span>Settings</span>
          </TabsTrigger>
          <TabsTrigger value="security" class="flex items-center gap-2">
            <Shield size={16} />
            <span>Security</span>
          </TabsTrigger>
        </TabsList>
        
        {#if !editMode && isSessionUser}
          <Button on:click={toggleEditMode} variant="outline" class="ml-auto">
            Edit Profile
          </Button>
        {/if}
      </div>
  
      <TabsContent value="profile" class="space-y-6">
        <Card>
          <CardHeader class="relative pb-0">
            <div class="absolute right-6 top-6">
              <Badge variant="outline">{user.joinDate}</Badge>
            </div>
            <div class="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
              <Avatar class="w-24 h-24 border">
                <AvatarImage src={user.avatar_url} alt={user.name} />
                <AvatarFallback>{user.name.split(' ').map((n: string) => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle class="text-2xl">{user.name} {user.surname}</CardTitle>
                <CardDescription class="text-lg">@{user.username}</CardDescription>
                <div class="flex items-center gap-2 mt-2 text-muted-foreground">
                  <Mail size={16} />
                  <span>{user.email}</span>
                </div>
              </div>
              <div>
                {#each user.roles as role}
                  <Badge variant="outline" class="m-1">{role.name}</Badge>
                {/each}
              </div>
            </div>
          </CardHeader>
          <CardContent class="pt-6">
            {#if !editMode}
              <div class="space-y-4">
                <p class="text-muted-foreground">{user.bio}</p>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                  {#if user.location}
                    <div class="flex items-center gap-2">
                      <MapPin size={16} class="text-muted-foreground" />
                      <span>{user.location}</span>
                    </div>
                  {/if}
                  
                  {#if user.company}
                    <div class="flex items-center gap-2">
                      <Briefcase size={16} class="text-muted-foreground" />
                      <span>{user.company}</span>
                    </div>
                  {/if}
                  
                  {#if user.github}
                    <div class="flex items-center gap-2">
                      <Github size={16} class="text-muted-foreground" />
                      <span>{user.github}</span>
                    </div>
                  {/if}
                  
                  {#if user.twitter}
                    <div class="flex items-center gap-2">
                      <Twitter size={16} class="text-muted-foreground" />
                      <span>{user.twitter}</span>
                    </div>
                  {/if}
                </div>
              </div>
            {:else}
              <form onsubmit={(e) => {
                  e.preventDefault();
                  handleSubmit();
                }} class="space-y-4">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div class="space-y-2">
                    <Label for="name">Full Name</Label>
                    <Input id="name" bind:value={formData.name} />
                  </div>
                  
                  <div class="space-y-2">
                    <Label for="username">Username</Label>
                    <Input id="username" bind:value={formData.username} />
                  </div>
                  
                  <div class="space-y-2">
                    <Label for="email">Email</Label>
                    <Input id="email" type="email" bind:value={formData.email} />
                  </div>
                  
                  <div class="space-y-2">
                    <Label for="location">Location</Label>
                    <Input id="location" bind:value={formData.location} />
                  </div>
                  
                  <div class="space-y-2">
                    <Label for="company">Company</Label>
                    <Input id="company" bind:value={formData.company} />
                  </div>
                  
                  <div class="space-y-2">
                    <Label for="github">GitHub</Label>
                    <Input id="github" bind:value={formData.github} />
                  </div>
                  
                  <div class="space-y-2">
                    <Label for="twitter">Twitter</Label>
                    <Input id="twitter" bind:value={formData.twitter} />
                  </div>
                  
                  <div class="space-y-2 md:col-span-2">
                    <Label for="bio">Bio</Label>
                    <Textarea id="bio" bind:value={formData.bio} rows={4} />
                  </div>
                </div>
                
                <div class="flex justify-end gap-2 pt-4">
                  <Button type="button" variant="outline" onclick={toggleEditMode}>Cancel</Button>
                  <Button type="submit">Save Changes</Button>
                </div>
              </form>
            {/if}
          </CardContent>
        </Card>
      </TabsContent>
  
      <TabsContent value="settings" class="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Notification Settings</CardTitle>
            <CardDescription>Manage how you receive notifications</CardDescription>
          </CardHeader>
          <CardContent class="space-y-4">
            <div class="flex items-center justify-between">
              <div class="space-y-0.5">
                <div class="font-medium">Email Notifications</div>
                <div class="text-sm text-muted-foreground">Receive email notifications about account activity</div>
              </div>
              <Switch />
            </div>
            
            <div class="flex items-center justify-between">
              <div class="space-y-0.5">
                <div class="font-medium">Push Notifications</div>
                <div class="text-sm text-muted-foreground">Receive push notifications on your devices</div>
              </div>
              <Switch checked />
            </div>
            
            <div class="flex items-center justify-between">
              <div class="space-y-0.5">
                <div class="font-medium">Marketing Emails</div>
                <div class="text-sm text-muted-foreground">Receive emails about new features and updates</div>
              </div>
              <Switch />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save Preferences</Button>
          </CardFooter>
        </Card>
      </TabsContent>
  
      <TabsContent value="security" class="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Security Settings</CardTitle>
            <CardDescription>Manage your account security</CardDescription>
          </CardHeader>
          <CardContent class="space-y-4">
            <div class="space-y-2">
              <Label for="current-password">Current Password</Label>
              <Input id="current-password" type="password" />
            </div>
            
            <div class="space-y-2">
              <Label for="new-password">New Password</Label>
              <Input id="new-password" type="password" />
            </div>
            
            <div class="space-y-2">
              <Label for="confirm-password">Confirm New Password</Label>
              <Input id="confirm-password" type="password" />
            </div>
            
            <div class="pt-4">
              <div class="flex items-center justify-between">
                <div class="space-y-0.5">
                  <div class="font-medium">Two-Factor Authentication</div>
                  <div class="text-sm text-muted-foreground">Add an extra layer of security to your account</div>
                </div>
                <Switch />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button>Update Password</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  </div>