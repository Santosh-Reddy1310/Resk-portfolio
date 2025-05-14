import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const supabaseUrl = Deno.env.get("SUPABASE_URL") ?? "";
const supabaseAnonKey = Deno.env.get("SUPABASE_ANON_KEY") ?? "";
const supabaseClient = createClient(supabaseUrl, supabaseAnonKey);

serve(async (req) => {
    if (req.method !== 'POST') {
        return new Response(JSON.stringify({ error: 'Method Not Allowed' }), {
            status: 405,
            headers: { 'Content-Type': 'application/json' },
        });
    }

    try {
        const { name, email, subject, message } = await req.json();

        if (!name || !email || !subject || !message) {
            return new Response(JSON.stringify({ error: 'Missing required fields' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        // Store the contact message in Supabase
        const { error: insertError } = await supabaseClient
            .from('contact_messages')
            .insert([
                {
                    name,
                    email,
                    subject,
                    message,
                },
            ]);

        if (insertError) {
            console.error("Error storing contact message:", insertError);
            return new Response(JSON.stringify({ error: "Failed to store contact message" }), {
                status: 500,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        return new Response(JSON.stringify({ message: 'Message received!' }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });

    } catch (error) {
        console.error('Error:', error);
        return new Response(
            JSON.stringify({
                error: 'Failed to process request',
                details: error && typeof error === "object" && "message" in error
                    ? (error as { message: string }).message
                    : String(error)
            }),
            {
                status: 500,
                headers: { 'Content-Type': 'application/json' },
            }
        );
    }
});